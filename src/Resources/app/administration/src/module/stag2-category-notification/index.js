import "./component";

Shopware.Module.register('stag2-category-notification', {
    routeMiddleware(next, currentRoute){
        if(currentRoute.name === 'sw.category.detail'){
            currentRoute.children.push({
                name: "sw.category.notification",
                path: "/sw/category/index/:id/notification",
                component: "stag2-category-notification-select",
                meta: {
                    parentPath: "sw.category.index"
                }
            });
        }
        next(currentRoute);
    }
});