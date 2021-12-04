import ProductIntro from '../../../components/productIntro'
const productDetails = {
    intro:{
        title: 'LMNAs ExperienNce Commerce',
        subtitle: 'Convert all visits to customers. Make online shopping a unique and memorable experience',
        features: [
            {name: 'Static product page generation'}, 
            {name: 'Language Selector'}, 
            {name: 'External Product content Management'},
            {name: 'Personilized shopping experience'},
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