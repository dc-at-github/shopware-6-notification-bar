<?php declare(strict_types=1);


namespace Dc\GlobalNotification\Core\Content;


use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
* @method void                      add(NotificationEntity $entity)
* @method void                      set(string $key, NotificationEntity $entity)
* @method NotificationEntity[]      getIterator()
* @method NotificationEntity[]      getElements()
* @method NotificationEntity|null   get(string $key)
 * @method NotificationEntity|null  first()
* @method NotificationEntity|null   last()
*/

class NotificationCollection extends EntityCollection
{
    public function getExpectedClass(): string
    {
        return NotificationEntity::class;
    }
}