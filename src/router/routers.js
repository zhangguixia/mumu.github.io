import Home from '../pages/home';
import MyList from '../pages/list';
import Detailed from '../pages/detailed';



const routers = [
    {
        path:'/',
        component: Home,
        exact:true
    },
    {
        path:'/list',
        component: MyList,
    },
    {
        path:'/detailed',
        component: Detailed,
    },
]

export default routers;