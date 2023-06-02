<?php declare(strict_types=1);

namespace Dc\GlobalNotification\Core\Content\Aggregate\PageNotification;


use Shopware\Core\Content\Category\CategoryDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\Field\BoolField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\FkField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\PrimaryKey;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Required;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ManyToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\Field\ReferenceVersionField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Dc\GlobalNotification\Core\Content\NotificationDefinition;

class PageNotificationDefinition extends EntityDefinition{

    public const ENTITY_NAME = "dc_page_notification";

    public function getEntityName(): string
    {
        return self::ENTITY_NAME;
    }

    public function getCollectionClass(): string
    {
        return PageNotificationCollection::class;
    }

    public function getEntityClass(): string
    {
        return PageNotificationEntity::class;
    }

    protected function defineFields(): FieldCollection
    {
        return new FieldCollection([
            (new FkField('stag2_notification_id', 'notificationId', NotificationDefinition::class, 'id')),
            (new ReferenceVersionField(NotificationDefinition::class)),
            (new FkField('category_id', 'categoryId', CategoryDefinition::class, 'id'))->addFlags(new Required(), new PrimaryKey()),
            (new ReferenceVersionField(CategoryDefinition::class))->addFlags(new Required(), new PrimaryKey()),
            (new BoolField('active', 'active'))->addFlags(new Required()),
            (new ManyToOneAssociationField('notification', 'stag2_notification_id', NotificationDefinition::class, 'id', false)),
            (new OneToOneAssociationField('category', 'category_id', "id", CategoryDefinition::class, false))
        ]);
    }
}