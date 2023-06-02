<?php declare(strict_types=1);

namespace Dc\GlobalNotification\Core\Content\Translation;

use Shopware\Core\Framework\DataAbstractionLayer\EntityTranslationDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\AllowHtml;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Dc\GlobalNotification\Core\Content\NotificationDefinition;

class NotificationTranslationDefinition extends EntityTranslationDefinition {

    public const ENTITY_NAME = "dc_notification_translation";

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getParentDefinitionClass(): string
    {
        return NotificationDefinition::class;
    }

    public function getEntityClass(): string
    {
        return NotificationTranslationEntity::class;
    }

    public function getCollectionClass(): string
    {
        return NotificationTranslationCollection::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new StringField('title', 'title'))->addFlags(new Required()),
            (new StringField('content', 'content'))->addFlags(new Required(), new AllowHtml())
        ]);
    }
}