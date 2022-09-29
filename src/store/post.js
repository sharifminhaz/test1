const state = () => ({
    posts: [],
    detailsPosts: {},
    postComments:[],
});
const mutations = {
    SET_POSTS(state, data) {
        state.posts = data
    },
    SET_DETAILPOSTS(state, data) {
        state.detailsPosts = data
    },
    SET_POSTCOMMENTS(state, data) {
        state.postComments = data
    },
};

const getters = {
    postList(state) {
        return state.posts
    },
    detailPost(state) {
        return state.detailsPosts
    },
    commentList(state){
        return state.postComments
    }
};
const actions = {
    getPosts({commit}) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                commit('SET_POSTS', json)
            })
    },
    deletePost(id) {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {method: 'DELETE'})
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return true
            })

    },
    createPost(post) {
        fetch('https://jsonplaceholder.typicode.com/posts/', {method: 'POST', body: post})
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return true
            })

    },
    editPost(post) {
        fetch('https://jsonplaceholder.typicode.com/posts/' + post.id, {method: 'PATCH', body: post})
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return true
            })

    },
    getPostDetail({commit},id) {
         fetch('https://jsonplaceholder.typicode.com/posts/' + id, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                commit('SET_DETAILPOSTS', json)
                return json
            })

    },
    getPostComment({commit},id) {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                console.log(json);
                commit('SET_POSTCOMMENTS', json)
            })

    }
};
export default {state, mutations, getters, actions}