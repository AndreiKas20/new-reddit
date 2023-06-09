import {postData} from "../../types/postsType";
import {makeAutoObservable} from "mobx";

class DataTargetCardStore {
    cardData: postData = {
        all_awardings: [],
        allow_live_comments: false,
        approved_at_utc: 0,
        approved_by: '',
        archived: false,
        author: '',
        author_flair_background_color: '',
        author_flair_css_class: '',
        author_flair_richtext: [],
        author_flair_template_id: '',
        author_flair_text: '',
        author_flair_text_color: '',
        author_flair_type: '',
        author_fullname: '',
        author_is_blocked: false,
        author_patreon_flair: false,
        author_premium: false,
        awarders: [],
        banned_at_utc: '',
        banned_by: '',
        can_gild: false,
        can_mod_post: false,
        category: '',
        clicked: false,
        content_categories: '',
        contest_mode: false,
        created: 0,
        created_utc: 0,
        discussion_type: '',
        distinguished: '',
        domain: '',
        downs: 0,
        edited: false,
        gilded: 0,
        gildings: {},
        hidden: false,
        hide_score: false,
        id: '',
        is_created_from_ads_ui: false,
        is_crosspostable: false,
        is_meta: false,
        is_original_content: false,
        is_reddit_media_domain: false,
        is_robot_indexable: false,
        is_self: false,
        is_video: false,
        likes: '',
        link_flair_background_color: '',
        link_flair_css_class: '',
        link_flair_richtext: [],
        link_flair_text: '',
        link_flair_text_color: '',
        link_flair_type: '',
        locked: false,
        media: '',
        media_embed: {},
        media_only: false,
        mod_note: '',
        mod_reason_by: '',
        mod_reason_title: '',
        mod_reports: [],
        name: '',
        no_follow: false,
        num_comments: 0,
        num_crossposts: 0,
        num_reports: '',
        over_18: false,
        parent_whitelist_status: '',
        permalink: '',
        pinned: false,
        post_hint: '',
        preview: {enabled:false},
        pwls: 0,
        quarantine: false,
        removal_reason: '',
        removed_by: '',
        removed_by_category: '',
        report_reasons: '',
        saved: false,
        score: 0,
        secure_media: '',
        secure_media_embed: {width:0,height:0,content:'',media_domain_url:''},
        selftext: '',
        selftext_html: '',
        send_replies: false,
        spoiler: false,
        stickied: false,
        subreddit: '',
        subreddit_id: '',
        subreddit_name_prefixed: '',
        subreddit_subscribers: 0,
        subreddit_type: '',
        suggested_sort: '',
        thumbnail: '',
        thumbnail_height: 0,
        thumbnail_width: 0,
        title: '',
        top_awarded_type: '',
        total_awards_received: 0,
        treatment_tags: [],
        ups: 0,
        upvote_ratio: 0,
        url: '',
        url_overridden_by_dest: '',
        user_reports: [],
        view_count: '',
        visited: false,
        whitelist_status: '',
        wls: 0,
    }

    constructor() {
        makeAutoObservable(this)
    }

    changePostData(newData
                       :
                       postData
    ) {
        this.cardData = newData
    }
}

export default new DataTargetCardStore()