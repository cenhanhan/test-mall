import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () =>
    import ('@/views/home/Home')
const Category = () =>
    import ('@/views/category/Category')
const Cart = () =>
    import ('@/views/cart/Cart')
const Profile = () =>
    import ('@/views/profile/Profile')

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router