import {gql, graphql} from 'react-apollo'

function CausesList({data: {allCauses}}) {

  if (!allCauses) {
    return <section></section>
  }

  return (
    <section className="causes-list">
      <h2>The causes we support</h2>
      {allCauses.map((cause, index) =>
        <div className="cause" key={cause.id}>
          <div>
            <img src={cause.logoUrl} />
          </div>
          <div className="cause-name">
            {cause.name}
          </div>
        </div>
      )}


    <style jsx global>{`

      .causes-list {
        border: 1px solid #1eaedb;
        padding: 16px;
        border-radius: 3px;
        background: #f6feff;
      }

      .cause {
        color: blue;
        display: flex;
        margin: 24px;
      }

      .cause-name {
        align-self: center;
        padding: 16px;
        font-size: 24px;
      }
    `}</style>
    </section>
  )
}

const allCausesQL = gql`
  query { 
    allCauses {
      id,
      description,
      name,
      logoUrl
    }
  }
`

export default graphql(allCausesQL, {
  props: ({data}) => ({
    data
  })
})(CausesList)
