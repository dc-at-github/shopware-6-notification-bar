<?php declare(strict_types=1);

namespace Dc\GlobalNotification\Migration;

use Doctrine\DBAL\Connection;
use Shopware\Core\Framework\Migration\MigrationStep;

class Migration1626685024CreateNotificationTranslationTable extends MigrationStep
{
    public function getCreationTimestamp(): int
    {
        return 1626685024;
    }

    public function update(Connection $connection): void
    {
        $sql = <<<SQL
            CREATE TABLE IF NOT EXISTS `stag2_notification_translation` (
                `stag2_notification_id` BINARY(16) NOT NULL,
                `stag2_notification_version_id` BINARY(16) NOT NULL,
                `language_id` BINARY(16) NOT NULL,
                `title` VARCHAR(255) NOT NULL,
                `content` LONGTEXT NOT NULL,
                `created_at` DATETIME(3) NOT NULL,
                `updated_at` DATETIME(3) NULL,
                PRIMARY KEY (`stag2_notification_id` ,`stag2_notification_version_id`, `language_id`),
                CONSTRAINT `fk.stag2_notification_translation.language_id` FOREIGN KEY (`language_id`)
                    REFERENCES `language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
                CONSTRAINT `fk.stag2_notification_translation.stag2_notification_id` FOREIGN KEY (`stag2_notification_id`, `stag2_notification_version_id`)
                    REFERENCES `stag2_notification` (`id`, `version_id`) ON DELETE CASCADE ON UPDATE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
SQL;

        $connection->executeStatement($sql);

    }

    public function updateDestructive(Connection $connection): void
    {
        // implement update destructive
    }
}
