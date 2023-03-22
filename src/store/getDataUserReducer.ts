import {Reducer} from "redux";
import axios from "axios";
import { userDataType} from "../../types/userDataType";
import img from '../assets/img/anon.jpg'
export const defaultUser : userDataType = {
    accept_followers:false,
    awardee_karma: 0,
    awarder_karma: 0,
    can_create_subreddit: false,
    can_edit_name: false,
    coins: 0,
    comment_karma: 0,
    created: 0,
    created_utc: 0,
    features: {},
    force_password_reset: false,
    gold_creddits: 0,
    gold_expiration: null,
    has_android_subscription: false,
    has_external_account: false,
    has_gold_subscription: false,
    has_ios_subscription: false,
    has_paypal_subscription: false,
    has_stripe_subscription: false,
    has_subscribed: false,
    has_subscribed_to_premium: false,
    has_verified_email: false,
    has_visited_new_profile: false,
    hide_from_robots: false,
    icon_img: img,
    id: '',
    in_beta: false,
    in_redesign_beta: false,
    inbox_count: 0,
    is_employee: false,
    is_gold: false,
    is_mod: false,
    is_sponsor: false,
    is_suspended: false,
    link_karma: 0,
    linked_identities: [''],
    name:'Анонимка',
    num_friends: 0,
    oauth_client_id: '',
    over_18: false,
    password_set: false,
    pref_autoplay: false,
    pref_clickgadget: 0,
    pref_geopopular: '',
    pref_nightmode: false,
    pref_no_profanity: false,
    pref_show_presence: false,
    pref_show_snoovatar: false,
    pref_show_trending: false,
    pref_show_twitter: false,
    pref_top_karma_subreddits: false,
    pref_video_autoplay: false,
    seen_give_award_tooltip: false,
    seen_layout_switch: false,
    seen_premium_adblock_modal: false,
    seen_redesign_modal: false,
    seen_subreddit_chat_ftux: false,
    snoovatar_img: '',
    snoovatar_size: null,
    subreddit: {},
    suspension_expiration_utc: null,
    total_karma: 0,
    verified: false,
}
const user = {user: defaultUser}

const GET_DATA = 'GET_DATA'
const CLEAR_DATA = 'CLEAR_DATA'
export const getDataUserReducer: Reducer = (state = user, action) => {
    switch (action.type) {
        case GET_DATA:
            return {...state, user: action.payload}
        case CLEAR_DATA:
            return {...state, user: action.payload}
        default:
            return state
    }
}

export const clearUsersAction = (payload: userDataType) => ({type: CLEAR_DATA, payload})
const getDataAction = (payload: userDataType) => ({type: GET_DATA, payload})

export const getDataUser = (token: string) => {
    return (dispatch: any) => {
        if (token === 'undefined' || token === '' || !token) return
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const userData : userDataType = resp.data;
                dispatch(getDataAction(userData))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}