<?php declare(strict_types=1);

namespace Dc\GlobalNotification\Core\Content\Aggregate\PageNotification;


use Shopware\Core\Content\Category\CategoryEntity;
use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Dc\GlobalNotification\Core\Content\NotificationEntity;

class PageNotificationEntity extends Entity{

    /**
     * @var $notificationId string
     */
    protected $notificationId;

    /**
     * @var $categoryId string
     */
    protected $categoryId;

    /**
     * @var $active bool
     */
    protected $active;

    public function getNotificationId(): string{
        return $this->notificationId;
    }

    public function setNotificationId(string $notificationId): void{
        $this->notificationId = $notificationId;
    }

    public function getCategoryId(): string{
        return $this->categoryId;
    }

    public function setCategoryId(string $categoryId): void{
        $this->categoryId = $categoryId;
    }

    public function getActive(): bool{
        return $this->active;
    }

    public function setActive(bool $active): void{
        $this->active = $active;
    }
}