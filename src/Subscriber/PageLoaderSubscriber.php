<?php declare(strict_types=1);

namespace Dc\GlobalNotification\Subscriber;

use Shopware\Core\Framework\Context;
use Shopware\Core\Framework\DataAbstractionLayer\EntityRepositoryInterface;
use Shopware\Core\Framework\DataAbstractionLayer\Search\Criteria;
use Shopware\Core\System\SystemConfig\SystemConfigService;
use Shopware\Storefront\Page\GenericPageLoadedEvent;
use Dc\GlobalNotification\Core\Content\Aggregate\PageNotification\PageNotificationEntity;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class PageLoaderSubscriber implements EventSubscriberInterface
{

    /**
     * @var EntityRepositoryInterface
     */
    private $stag2Notification;

    /**
     * @var SystemConfigService
     */
    private $systemConfigService;

    /**
     * @param EntityRepositoryInterface $stag2Notification
     * @param SystemConfigService $systemConfigService
     */
    public function __construct(
        EntityRepositoryInterface $stag2Notification,
        SystemConfigService $systemConfigService
    ){
        $this->stag2Notification = $stag2Notification;
        $this->systemConfigService = $systemConfigService;
    }

    /**
     * Returns an array of event names this subscriber wants to listen to.
     *
     * The array keys are event names and the value can be:
     *
     *  * The method name to call (priority defaults to 0)
     *  * An array composed of the method name to call and the priority
     *  * An array of arrays composed of the method names to call and respective
     *    priorities, or 0 if unset
     *
     * For instance:
     *
     *  * ['eventName' => 'methodName']
     *  * ['eventName' => ['methodName', $priority]]
     *  * ['eventName' => [['methodName1', $priority], ['methodName2']]]
     *
     * The code must not depend on runtime state as it will only be called at compile time.
     * All logic depending on runtime state must be put into the individual methods handling the events.
     *
     * @return array The event names to listen to
     */
    public static function getSubscribedEvents()
    {
        return [
            GenericPageLoadedEvent::class => 'addExtraPageData'
        ];
    }

    public function addExtraPageData(GenericPageLoadedEvent $event): void{

        if (!$event->getRequest()->isXmlHttpRequest()) {
            $NotificationActive = $this->systemConfigService->get("DcGlobalNotification.config.active");
            $notificationId = false;
            $pageHeader = $event->getPage()->getHeader();
            $cookieName = "stag2-notification-default";

            if ($pageHeader && $pageHeader->getNavigation()) {
                $activeCategory = $pageHeader->getNavigation()->getActive();
                $notificationExtention = $activeCategory->getExtensions("notification");

                /**
                 * @var $pageNotification PageNotificationEntity
                 */
                $pageNotification = $notificationExtention['notification'];

                if ($NotificationActive) {
                    if ($activeCategory && $pageNotification && $pageNotification->getActive()) {
                        $notificationId = $pageNotification->getNotificationId();
                        $cookieName = "stag2-notification-" . $notificationId;
                    }
                }
            }

            if (!$notificationId) {
                $notificationId = $this->systemConfigService->get("DcGlobalNotification.config.notification");
            }

            $notification = $this->getNotification($notificationId, $event->getContext());

            $event->getPage()->setExtensions([
                "notification" => $notification,
                "stag2NotificationCookie" => $cookieName
            ]);
        }
    }

    /**
     * @param string|null $notificationId
     * @param Context $context
     * @return false|mixed|null
     */
    private function getNotification(?string $notificationId, Context $context){

        if(!$notificationId){
            return false;
        }

        $navigation = $this->stag2Notification->search(
            new Criteria([$notificationId]),
            $context
        );

        if($navigation->getTotal() >= 1){
            return $navigation->getEntities()->first();
        }

        return false;
    }
}