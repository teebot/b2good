import React from 'react';
export default (Component) => (
    class extends React.Component {
        static async getInitialProps (ctx) {

            const headers = ctx.req ? ctx.req.headers : {}
            const props = {
                url: { query: ctx.query, pathname: ctx.pathname },
                ...await (Component.getInitialProps ? Component.getInitialProps(ctx) : {})
            }

            return {
                initialState: {
                    headers,
                    ...props
                }
            }
        }

        constructor (props) {
            super(props)
        }

        render () {
            return (
                <Component {...this.props} />
            )
        }
    }
)
