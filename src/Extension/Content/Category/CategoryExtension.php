<?php declare(strict_types=1);

namespace Dc\GlobalNotification\Extension\Content\Category;

use Shopware\Core\Content\Category\CategoryDefinition;
use Shopware\Core\Framework\DataAbstractionLayer\EntityExtension;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\CascadeDelete;
use Shopware\Core\Framework\DataAbstractionLayer\Field\Flag\Extension;
use Shopware\Core\Framework\DataAbstractionLayer\Field\OneToOneAssociationField;
use Shopware\Core\Framework\DataAbstractionLayer\FieldCollection;
use Dc\GlobalNotification\Core\Content\Aggregate\PageNotification\PageNotificationDefinition;

class CategoryExtension extends EntityExtension{

    /**
     * Defines which entity definition should be extended by this class
     */
    public function getDefinitionClass(): string
    {
        return CategoryDefinition::class;
    }

    public function extendFields(FieldCollection $collection): void
    {
        $collection->add(
            (new OneToOneAssociationField(
                "notification",
                "id",
                "category_id",
                PageNotificationDefinition::class,
                true)
            )->addFlags(new CascadeDelete(), new Extension())
        );
    }
}