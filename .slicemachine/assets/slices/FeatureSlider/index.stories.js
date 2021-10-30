import MyComponent from '../../../../slices/FeatureSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FeatureSlider'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"feature_slider","items":[{"title":"mesh value-added functionalities","subtitle":[{"type":"paragraph","text":"Aliquip nulla laborum fugiat id id.","spans":[]}],"description":[{"type":"paragraph","text":"Incididunt excepteur sint dolor duis enim nisi reprehenderit ut do laboris ea. Officia pariatur anim aliquip magna sint culpa irure nostrud dolore nisi ex incididunt culpa ex et.","spans":[]}],"iconFirst":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"textFirst":"transform cross-platform e-business","iconSecond":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"},"textSecond":"brand plug-and-play initiatives","iconThird":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"textThird":"target magnetic ROI","iconFourth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"textFourth":"optimize real-time applications","iconFifth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"textFifth":"evolve viral bandwidth"},{"title":"productize front-end web services","subtitle":[{"type":"paragraph","text":"Quis proident elit amet aliqua est.","spans":[]}],"description":[{"type":"paragraph","text":"Aliquip consectetur anim qui. Cupidatat aliqua reprehenderit ipsum officia sit ex nisi velit esse excepteur deserunt. Et tempor voluptate est voluptate pariatur.","spans":[]}],"iconFirst":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"textFirst":"enhance customized solutions","iconSecond":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"textSecond":"generate enterprise methodologies","iconThird":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"textThird":"reinvent frictionless functionalities","iconFourth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"textFourth":"transform web-enabled deliverables","iconFifth":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"textFifth":"aggregate cross-platform action-items"}],"primary":{"slug":"enhance out-of-the-box ROI","autoplaySpeed":3945,"video":"seize turn-key technologies"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
