<?php declare(strict_types=1);


namespace Dc\GlobalNotification\Core\Content\Translation;


use Shopware\Core\Framework\DataAbstractionLayer\TranslationEntity;
use Dc\GlobalNotification\Core\Content\NotificationEntity;

class NotificationTranslationEntity extends TranslationEntity
{
    protected $title;

    protected $content;

    /**
     * @var NotificationEntity
     */
    protected $notification;

    public function getTitle(): string{
        return $this->title;
    }

    public function setTitle(string $title): void{
        $this->title = $title;
    }

    public function getContent(): string{
        return $this->content;
    }

    public function setContent(string $content): void{
        $this->content = $content;
    }

    public function getNotification(): ?NotificationEntity{
        return $this->notification;
    }

    public function setNotification(NotificationEntity $notification): void{
        $this->notification = $notification;
    }
}