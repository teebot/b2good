import {gql, graphql, compose} from 'react-apollo'

function NewDonation({data: {allCauses, allBusinesses, allDonations}, createDonation}) {

  function handleSubmit(e) {
    e.preventDefault()

    let amount = parseFloat(e.target.elements.amount.value)
    let businessId = e.target.elements.businessId.value
    let causeId = e.target.elements.causeId.value
    createDonation(amount, businessId, causeId);

    e.target.elements.amount.value = ''
    e.target.elements.businessId.value = ''
    e.target.elements.causeId.value = ''

  }

  if (!allCauses || !allBusinesses || !allDonations) {
    return <div></div>
  }

  return <div>

    <h3>Donations</h3>
    {allDonations.map((donation, index) =>
      <div key={donation.id}>{donation.amount}</div>
    )}


    <form onSubmit={handleSubmit}>
      <label>Cause</label>
      <select name="causeId">
        {allCauses.map((cause, index) =>
          <option key={cause.id} value={cause.id}>{cause.name}</option>
        )}
      </select>

      <label>Business</label>
      <select name="businessId">
        {allBusinesses.map((business, index) =>
          <option key={business.id} value={business.id}>{business.name}</option>
        )}
      </select>

      <div>
      <label>Amount</label>
      <input name="amount" />
      </div>

      <button type='submit'>Submit</button>
    </form>
  </div>
}

const DONATION_MUTATION = gql`
  mutation createDonation($amount: Float!, $businessId: ID!, $causeId: ID!) {
    createDonation(amount: $amount, businessId: $businessId, causeId: $causeId) {
      id
      createdAt
    }
  }
`

const BUSINESS_CAUSES_QUERY = gql`
  query {
    allCauses {
      id,
      name
    }
    
    allBusinesses {
      id,
      name
    }
    
    allDonations {
      id,
      amount
    } 
  }
`

export default compose(
  graphql(BUSINESS_CAUSES_QUERY, {
    props: ({data}) => ({
      data
    })
  }),

  graphql(DONATION_MUTATION, {
    name: 'createDonation',
    props: (obj) => {
      console.log(obj);
      return {
        createDonation: (amount, businessId, causeId) => obj.createDonation({
          variables: {amount, businessId, causeId},

          updateQueries: {
            Donation: (previousResult, { mutationResult }) => {
              debugger;
              const newDonation = mutationResult.data.createDonation
              return Object.asset({}, previousResult, {
                allDonations: [newDonation, ...previousResult.allDonations]
              })
            }
          }
        })
      }
    }
  })
)(NewDonation)
