import React, {Component} from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';


const Ptypes = () =>{

    const node = document.getElementById('root');
    class Post extends Component{
        render() {
            return React.createElement(
                'div',
                {
                    className: 'post'
                },
                React.createElement(
                    'h2',
                    {
                        className: 'postAuthor',
                        id: this.props.id
                    },
                    this.props.user,
                    React.createElement(
                        'span',
                        {
                            className: 'postBody'
                        },
                        this.props.content
                    ),
                    this.props.children
                )
            );
        }
    }
    Post.propTypes = {
        user: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        id:PropTypes.number.isRequired
    };
    class Comment extends Component{
        render(){
            return React.createElement(
                'div',
                {
                    className: 'comment'
                },
                React.createElement(
                    'h2',
                    {
                        className: 'commentAuthor'
                    },
                    this.props.user,
                    React.createElement(
                        'span',
                        {
                            className: 'commentContent'
                        },
                        this.props.content
                    )
                )
            );
        }
    }
    const App = React.createElement(Post,{
        id:1,
        content: 'said:This is a Post!',
        user: 'mark'
    },
     React.createElement(Comment,{
         id:2,
         user:'bob',
         content:'commented: wow! how cool!'
     })
    );
render(App, node);
}
export default Ptypes;