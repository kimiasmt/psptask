import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {USER_EXAMPLE} from "../public/User/User";

const checkAuthorization = ({userRole, requiredUser}: {userRole:string,requiredUser:string}) => {
    return requiredUser === userRole;
};

const withAuthorization = (requiredUser:string) => (WrappedComponent:any) => {
    const AuthorizationWrapper = (props:any) => {
        const router = useRouter();
        useEffect(() => {
            const isAuthorized = checkAuthorization({userRole : USER_EXAMPLE.role, requiredUser : requiredUser});
            if (!isAuthorized) {
                router.push('/');
            }
        }, []);
        return <WrappedComponent {...props} />;
    };
    return AuthorizationWrapper;
};

export default withAuthorization;