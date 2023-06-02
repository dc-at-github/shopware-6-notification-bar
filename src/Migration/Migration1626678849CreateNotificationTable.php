<?php declare(strict_types=1);

namespace Dc\GlobalNotification\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1626678849CreateNotificationTable extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1626678849;
    }

    public function update(Connection $connection): void
    {
        $sql =<<<SQL
CREATE TABLE IF NOT EXISTS `stag2_notification` (
    `id` BINARY(16) NOT NULL,
    `version_id` BINARY(16) NOT NULL,
    `auto_increment` BIGINT unsigned NOT NULL AUTO_INCREMENT,
    `display_as` ENUM('bar', 'popup') DEFAULT 'bar',
    `display_title` TINYINT(1) NOT NULL DEFAULT 0,
    `animation_type` ENUM('fade-in', 'slide-up', 'slide-down', 'slide-left', 'slide-right') DEFAULT 'fade-in',
    `border_type` ENUM('no-border', 'solid', 'dashed') DEFAULT 'no-border',
    `position` ENUM('top', 'bottom', 'below-header', 'above-footer') DEFAULT 'top',
    `bar_width` ENUM('box-content', 'full-width') DEFAULT 'full-width',
    `icon_color` VARCHAR(255) DEFAULT '#FFFFFF',
    `title_color` VARCHAR(255) DEFAULT '#FFFFFF',
    `background_color` VARCHAR(255) DEFAULT '#008490',
    `overlay_color` VARCHAR(255) DEFAULT '#000000b3',
    `border_color` VARCHAR(255) DEFAULT '#008490',
    `cookie_life_time` BIGINT unsigned NULL DEFAULT 0,
    `active` TINYINT(1) NOT NULL DEFAULT 1,
    `created_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3),
    PRIMARY KEY (`id`, `version_id`),
    KEY `idx.auto_increment` (`auto_increment`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
SQL;

        $connection->executeStatement($sql);

    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
