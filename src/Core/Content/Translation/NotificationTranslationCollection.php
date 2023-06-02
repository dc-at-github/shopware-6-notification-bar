<?php declare(strict_types=1);


namespace Dc\GlobalNotification\Core\Content\Translation;


use Shopware\Core\Framework\DataAbstractionLayer\EntityCollection;

/**
 * @method void                          add(NotificationTranslationEntity $entity)
 * @method void                          set(string $key, NotificationTranslationEntity $entity)
 * @method NotificationTranslationEntity[]    getIterator()
 * @method NotificationTranslationEntity[]    getElements()
 * @method NotificationTranslationEntity|null get(string $key)
 * @method NotificationTranslationEntity|null first()
 * @method NotificationTranslationEntity|null last()
 */
class NotificationTranslationCollection extends EntityCollection
{
    public function getExpectedClass(): string
    {
        return NotificationTranslationEntity::class;
    }
}