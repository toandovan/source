import React from 'react';
import {RoutePermittedRole} from 'shared/constants/AppConst';

const PropertiesListing = React.lazy(() => import('./Properties'));

export const propertiesConfigs = [
    {
        permittedRole: RoutePermittedRole.user,
        path: '/properties',
        element: <PropertiesListing />,
    }
];