
export type userDataType = {
    accept_followers: boolean
    awardee_karma: number
    awarder_karma: number
    can_create_subreddit: boolean
    can_edit_name: boolean
    coins: number
    comment_karma: number
    created: number
    created_utc: number
    features: {}
    force_password_reset: boolean
    gold_creddits: number
    gold_expiration: null
    has_android_subscription: boolean
    has_external_account: boolean
    has_gold_subscription: boolean
    has_ios_subscription: boolean
    has_paypal_subscription: boolean
    has_stripe_subscription: boolean
    has_subscribed: boolean
    has_subscribed_to_premium: boolean
    has_verified_email: boolean
    has_visited_new_profile: boolean
    hide_from_robots: boolean
    icon_img: string
    id: string
    in_beta: boolean
    in_redesign_beta: boolean
    inbox_count: number
    is_employee: boolean
    is_gold: boolean
    is_mod: boolean
    is_sponsor: boolean
    is_suspended: boolean
    link_karma: number
    linked_identities: [string]
    name: string
    num_friends: number
    oauth_client_id: string
    over_18: boolean
    password_set: boolean
    pref_autoplay: boolean
    pref_clickgadget: number
    pref_geopopular: string
    pref_nightmode: boolean
    pref_no_profanity: boolean
    pref_show_presence: boolean
    pref_show_snoovatar: boolean
    pref_show_trending: boolean
    pref_show_twitter: boolean
    pref_top_karma_subreddits: boolean
    pref_video_autoplay: boolean
    seen_give_award_tooltip: boolean
    seen_layout_switch: boolean
    seen_premium_adblock_modal: boolean
    seen_redesign_modal: boolean
    seen_subreddit_chat_ftux: boolean
    snoovatar_img: string
    snoovatar_size: null
    subreddit: {}
    suspension_expiration_utc: null
    total_karma: number
    verified: boolean
}

// export const defaultUser : userDataType = {
//     accept_followers:false,
//     awardee_karma: 0,
//     awarder_karma: 0,
//     can_create_subreddit: false,
//     can_edit_name: false,
//     coins: 0,
//     comment_karma: 0,
//     created: 0,
//     created_utc: 0,
//     features: {},
//     force_password_reset: false,
//     gold_creddits: 0,
//     gold_expiration: null,
//     has_android_subscription: false,
//     has_external_account: false,
//     has_gold_subscription: false,
//     has_ios_subscription: false,
//     has_paypal_subscription: false,
//     has_stripe_subscription: false,
//     has_subscribed: false,
//     has_subscribed_to_premium: false,
//     has_verified_email: false,
//     has_visited_new_profile: false,
//     hide_from_robots: false,
//     icon_img: '',
//     id: '',
//     in_beta: false,
//     in_redesign_beta: false,
//     inbox_count: 0,
//     is_employee: false,
//     is_gold: false,
//     is_mod: false,
//     is_sponsor: false,
//     is_suspended: false,
//     link_karma: 0,
//     linked_identities: [''],
//     name:'',
//     num_friends: 0,
//     oauth_client_id: '',
//     over_18: false,
//     password_set: false,
//     pref_autoplay: false,
//     pref_clickgadget: 0,
//     pref_geopopular: '',
//     pref_nightmode: false,
//     pref_no_profanity: false,
//     pref_show_presence: false,
//     pref_show_snoovatar: false,
//     pref_show_trending: false,
//     pref_show_twitter: false,
//     pref_top_karma_subreddits: false,
//     pref_video_autoplay: false,
//     seen_give_award_tooltip: false,
//     seen_layout_switch: false,
//     seen_premium_adblock_modal: false,
//     seen_redesign_modal: false,
//     seen_subreddit_chat_ftux: false,
//     snoovatar_img: '',
//     snoovatar_size: null,
//     subreddit: {},
//     suspension_expiration_utc: null,
//     total_karma: 0,
//     verified: false,
// }