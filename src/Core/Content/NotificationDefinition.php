<?php declare(strict_types=1);

namespace Dc\GlobalNotification\Core\Content;


use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\BoolField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\WriteProtected;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IdField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\IntField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToManyAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\StringField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslatedField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\TranslationsAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\VersionField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Dc\GlobalNotification\Core\Content\Aggregate\PageNotification\PageNotificationDefinition;
use Dc\GlobalNotification\Core\Content\Translation\NotificationTranslationDefinition;

class NotificationDefinition extends EntityDefinition
{

    public const ENTITY_NAME = "stag2_notification";

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getCollectionClass(): string
    {
        return NotificationCollection::class;
    }

    public function getEntityClass(): string
    {
        return NotificationEntity::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new IdField('id', 'id'))->addFlags(new Required(), new PrimaryKey()),
            (new VersionField())->addFlags(new Required()),
            (new IntField('auto_increment', 'autoIncrement'))->addFlags(new WriteProtected()),
            (new StringField('display_as', 'displayAs'))->addFlags(new Required()),
            (new BoolField('display_title', 'displayTitle'))->addFlags(new Required()),
            (new StringField('animation_type', 'animationType')),
            (new StringField('border_type', 'borderType')),
            (new StringField('position', 'position')),
            (new StringField('bar_width', 'width')),
            (new StringField('icon_color', 'iconColor')),
            (new StringField('title_color', 'titleColor')),
            (new StringField('background_color', 'backgroundColor')),
            (new StringField('overlay_color', 'overlayColor')),
            (new StringField('border_color', 'borderColor')),
            (new IntField('cookie_life_time', 'cookieLifeTime')),
            (new BoolField('active', 'active'))->addFlags(new Required()),

            (new TranslatedField('title', 'title'))->addFlags(new Required()),
            (new TranslatedField('content', 'content'))->addFlags(new Required()),

            (new TranslationsAssociationField(NotificationTranslationDefinition::class, "stag2_notification_id")),
            (new OneToManyAssociationField("pageNotification", PageNotificationDefinition::class, "stag2_notification_id", "id"))
        ]);
    }
}