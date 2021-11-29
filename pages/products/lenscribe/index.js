import ProductIntro from 'components/productIntro'
const productDetails = {
    intro:{
        title: 'LMNAs ExperieNce Subscription',
        subtitle: 'Simplify your subscription invoices. Scale your subscritptions to any level you want',
        features: [
            {name: 'Customer experience dashboard'}, 
            {name: 'Customize subscription products'}, 
            {name: 'Granullar usage details'},
            {name: 'Service desk'},
            {name: 'Dunning and Collection'},
            {name: 'Open Source'},
        ]
    }
}
export default function Index() {
    return (
      <ProductIntro productDetails={productDetails}/>
    )
}