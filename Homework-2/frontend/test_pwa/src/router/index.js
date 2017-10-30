// Created by Renato
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/Profile'
import ShowFollowing from '@/components/ShowFollowing'
import ShowFollowers from '@/components/ShowFollowers'
import ShowFavorites from '@/components/ShowFavorites'
import PostTweet from '@/components/PostTweet'
import Search from '@/components/Search'
import SearchPlace from '@/components/SearchPlace'
import Login from '@/components/Login'
import Logout from '@/components/Logout'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/ShowFollowing',
      name: 'ShowFollowing',
      component: ShowFollowing
    },
    {
      path: '/ShowFollowers',
      name: 'ShowFollowers',
      component: ShowFollowers
    },
    {
      path: '/ShowFavorites',
      name: 'ShowFavorites',
      component: ShowFavorites
    },
    {
      path: '/PostTweet',
      name: 'PostTweet',
      component: PostTweet
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/SearchPlace',
      name: 'SearchPlace',
      component: SearchPlace
    },
    {
      path: '/Logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ]
})


router.beforeEach((to, from, next) => {
    //console.log("router.beforeEach | to.path=" + to.path)
    //console.log("router.beforeEach | to" + to)
    if(to.path != '/' ){
      //console.log("router.beforeEach | entrou - ")


      // if(localStorage.getItem('user')==undefined){
      //   console.log("router.beforeEach | don't exist")

      // }




            //prompt for username
        //     var user = prompt('please enter your username');
        //     //prompt for password
        //     var pass = prompt('please enter your password');
        //     //check if th username and password given equals our preset details
        //     if (user == 'username' && pass == 'password'){
        //     //set the user item
        //     localStorage.setItem('user', user);
        //     //move to the route
        //     next();
        //     }else{
        //     //alert the username and pass is wrong
        //     alert('Wrong username and password, you do not have permission to access that route');
        //     //return, do not move to the route
        //     return;
        //     }


    }

    next()
})

export default router