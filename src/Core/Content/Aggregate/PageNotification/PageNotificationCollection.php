<?php declare(strict_types=1);


namespace Dc\GlobalNotification\Core\Content\Aggregate\PageNotification;


use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void                      add(PageNotificationEntity $entity)
 * @method void                      set(string $key, PageNotificationEntity $entity)
 * @method PageNotificationEntity[]      getIterator()
 * @method PageNotificationEntity[]      getElements()
 * @method PageNotificationEntity|null   get(string $key)
 * @method PageNotificationEntity|null  first()
 * @method PageNotificationEntity|null   last()
 */
class PageNotificationCollection extends EntityCollection
{
    public function getExpectedClass(): string
    {
        return PageNotificationEntity::class;
    }
}