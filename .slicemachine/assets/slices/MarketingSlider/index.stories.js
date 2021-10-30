import MyComponent from '../../../../slices/MarketingSlider';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MarketingSlider'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"marketing_slider","items":[{"title":"aggregate wireless eyeballs","description":[{"type":"paragraph","text":"Esse elit ullamco laboris aute sit sunt ullamco duis. Sunt tempor laborum laborum consequat laboris aliqua. Incididunt irure proident excepteur sit cillum laborum elit adipisicing ad voluptate ex laboris nulla.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"video":"reinvent web-enabled convergence"},{"title":"empower bleeding-edge metrics","description":[{"type":"paragraph","text":"Excepteur qui voluptate minim do ut irure sit ea.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"video":"transition ubiquitous synergies"},{"title":"strategize mission-critical partnerships","description":[{"type":"paragraph","text":"Aliquip fugiat dolor anim do ullamco irure adipisicing.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"video":"leverage integrated portals"}],"primary":{"slice":"reinvent value-added networks","autoplaySpeed":6233},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
