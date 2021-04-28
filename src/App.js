import './card.js'
import Card from './card.js';
import './card.css'

function App() {

  let priceData = [
    {
      name : 'FREE',
      currency : '$',
      price : 0,
      duration : 'month',
      data: [{
        name : 'Single User',
        isEnabled : true
      },
      {
        name : '5GB Storage',
        isEnabled : true
      },
      {
        name : 'Unlimited Public Projects',
        isEnabled : true
      },
      {
        name : 'Community Access',
        isEnabled : true
      },
      {
        name : 'Unlimited Private Projects',
        isEnabled : false
      },
      {
        name : 'Dedicated Phone Support',
        isEnabled : false
      },
      {
        name : 'Free Subdomain',
        isEnabled : false
      },
      {
        name : 'Monthly Status Reports',
        isEnabled : false
      }
    ]
    },
    {
      name : 'PLUS',
      currency : '$',
      price : 9,
      duration : 'month',
      data: [{
        name : 'Single User',
        isEnabled : true
      },
      {
        name : '5GB Storage',
        isEnabled : true
      },
      {
        name : 'Unlimited Public Projects',
        isEnabled : true
      },
      {
        name : 'Community Access',
        isEnabled : true
      },
      {
        name : 'Unlimited Private Projects',
        isEnabled : true
      },
      {
        name : 'Dedicated Phone Support',
        isEnabled : true
      },
      {
        name : 'Free Subdomain',
        isEnabled : true
      },
      {
        name : 'Monthly Status Reports',
        isEnabled : false
      }
    ]
      
    },
    {
      name : 'PRO',
      currency : '$',
      price : 49,
      duration : 'month',
      data: [{
        name : 'Single User',
        isEnabled : true
      },
      {
        name : '5GB Storage',
        isEnabled : true
      },
      {
        name : 'Unlimited Public Projects',
        isEnabled : true
      },
      {
        name : 'Community Access',
        isEnabled : true
      },
      {
        name : 'Unlimited Private Projects',
        isEnabled : true
      },
      {
        name : 'Dedicated Phone Support',
        isEnabled : true
      },
      {
        name : 'Free Subdomain',
        isEnabled : true
      },
      {
        name : 'Monthly Status Reports',
        isEnabled : true
      }
    ]
       
    }
  ]

  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
    
      {
        priceData.map((obj) => {
          return (
            <Card content={obj}/>
          )
        })
      }
    </div>
    </div>
    </section>
    </>
}

export default App;
