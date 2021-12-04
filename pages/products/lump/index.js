import ProductIntro from '../../../components/productIntro'
const productDetails = {
    intro:{
        title: 'LMNAs Unified Marketing Platform',
        subtitle: 'Give your product a whole new definition to the world. Market every single update of your product to the customers',
        features: [
            {name: 'One Content for all Channels'}, 
            {name: 'Headless CMS'}, 
            {name: 'Programmable Media'},
            {name: 'Integrate to External ERP'},
            {name: 'Open Source'},
        ]
    }
}
export default function Index() {
    return (
      <ProductIntro productDetails={productDetails}/>
    )
}