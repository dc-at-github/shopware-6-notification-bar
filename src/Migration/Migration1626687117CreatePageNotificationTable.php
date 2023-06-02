<?php declare(strict_types=1);

namespace Dc\GlobalNotification\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1626687117CreatePageNotificationTable extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1626687117;
    }

    public function update(Connection $connection): void
    {
        $sql = <<<SQL
            CREATE TABLE IF NOT EXISTS `dc_page_notification` (
                `category_id` BINARY(16) NOT NULL,
                `category_version_id` BINARY(16) NOT NULL,
                `dc_notification_id` BINARY(16),
                `dc_notification_version_id` BINARY(16),
                `active` TINYINT(1) NOT NULL DEFAULT 1,
                `created_at` DATETIME(3) NOT NULL,
                `updated_at` DATETIME(3),
                PRIMARY KEY (`category_id`, `category_version_id`),
                CONSTRAINT `fk.dc_page_notification.dc_notification_id` FOREIGN KEY (`dc_notification_id`, `dc_notification_version_id`)
                    REFERENCES `dc_notification` (`id`, `version_id`) ON DELETE CASCADE ON UPDATE CASCADE,
                CONSTRAINT `fk.dc_page_notification.category_id` FOREIGN KEY (`category_id`, `category_version_id`)
                    REFERENCES `category` (`id`, `version_id`) ON DELETE CASCADE ON UPDATE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
SQL;

        $connection->executeStatement($sql);
    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
