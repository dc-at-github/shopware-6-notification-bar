<?php declare(strict_types=1);


namespace Dc\GlobalNotification\Core\Content;


use Shopware\Core\Framework\DataAbstractionLayer\Entity;
use Shopware\Core\Framework\DataAbstractionLayer\EntityIdTrait;

class NotificationEntity extends Entity
{
    use EntityIdTrait;

    /**
     * @var string
     */
    protected $title;

    /**
     * @var string
     */
    protected $content;

    /**
     * @var string
     */
    protected $autoIncrement;

    /**
     * @var string
     */
    protected $displayAs;

    /**
     * @var bool
     */
    protected $displayTitle;

    /**
     * @var string
     */
    protected $animationType;

    /**
     * @var string
     */
    protected $borderType;

    /**
     * @var string
     */
    protected $position;

    /**
     * @var string
     */
    protected $width;

    /**
     * @var string
     */
    protected $iconColor;

    /**
     * @var string
     */
    protected $titleColor;

    /**
     * @var string
     */
    protected $backgroundColor;

    /**
     * @var string
     */
    protected $overlayColor;

    /**
     * @var string
     */
    protected $borderColor;

    /**
     * @var int
     */
    protected $cookieLifeTime;

    /**
     * @var bool
     */
    protected $active;

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

    public function getAutoIncrement(): string{
        return $this->autoIncrement;
    }

    public function getAnimationType(): string{
        return $this->animationType;
    }

    public function setAnimationType(string $animationType): void{
        $this->animationType = $animationType;
    }

    public function getDisplayAs(): string{
        return $this->displayAs;
    }

    public function setDisplayAs(string $displayAs): void{
        $this->displayAs = $displayAs;
    }

    public function getDisplayTitle(): bool{
        return $this->displayTitle;
    }

    public function setDisplayTitle(bool $displayTitle): void{
        $this->displayTitle = $displayTitle;
    }

    public function getBorderType(): string{
        return $this->borderType;
    }

    public function setBorderType(string $borderType): void{
        $this->borderType = $borderType;
    }

    public function getPosition(){
        return $this->position;
    }

    public function setPosition(string $position): void{
        $this->position = $position;
    }

    public function getWidth(): string{
        return $this->width;
    }

    public function setWidth(string $width): void{
        $this->width = $width;
    }

    public function getIconColor(): string{
        return $this->iconColor;
    }

    public function setIconColor(string $iconColor): void{
        $this->iconColor = $iconColor;
    }

    public function getTitleColor(): string{
        return $this->titleColor;
    }

    public function setTitleColor(string  $titleColor): void{
        $this->titleColor = $titleColor;
    }

    public function getBackgroundColor(): string{
        return $this->backgroundColor;
    }

    public function setBackgroundColor(string $backgroundColor): void{
        $this->backgroundColor = $backgroundColor;
    }

    public function getOverlayColor(): string{
        return $this->overlayColor;
    }

    public function setOverlayColor(string $overlayColor): void{
        $this->overlayColor = $overlayColor;
    }

    public function getBorderColor(): string{
        return $this->borderColor;
    }

    public function setBorderColor(string $borderColor): void{
        $this->borderColor = $borderColor;
    }

    public function getCookieLifeTime(): int{
        return $this->cookieLifeTime;
    }

    public function setCookieLifeTime(int $cookieLifeTime): void{
        $this->cookieLifeTime = $cookieLifeTime;
    }

    public function getActive(): bool{
        return $this->active;
    }

    public function setActive(int $active): void{
        $this->active = $active;
    }
}