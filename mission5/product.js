Vue.component('product', {
  template: `
  <div class="card border-0 shadow-sm">
    <img :src="product.imageUrl[0]" class="card-img-top">
    <div class="card-body">
      <span class="badge badge-secondary float-right ml-2">{{ product.category }}</span>
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">{{ product.content }}</p>
      <p v-if="product.description" class="alert alert-warning small">{{ product.description }}</p>
      <p class="card-text text-right">{{ product.price | formatCurrency }}</p>
    </div>
    <div class="card-footer">
      <div class="d-flex justify-content-around row">
        <button type="button" class="col-5 btn btn-outline-secondary btn-sm" @click="getProduct(product)" :disabled="isLoading || product.description">
          <i v-if="isLoading" class="spinner-grow spinner-grow-sm"></i>
          詳細資訊
        </button>
        <button type="button" class="col-5 btn btn-outline-primary btn-sm" @click="putToCart(product)" :disabled="isLoading || inCart">
          <i v-if="isLoading" class="spinner-grow spinner-grow-sm"></i>
          加入購物車
        </button>
      </div>
    </div>
  </div>
  `,
  props: [ 'product', 'inCart' ],
  data () {
    return {
      apiInfo: {
        forCart: '/ec/shopping',
        forProduct: '/ec/product'
      },
      isLoading: false
    }
  },
  computed: {
  },
  methods: {
    putToCart (product) {
      this.isLoading = true
      axios.post(this.apiInfo.forCart, {
        product: product.id,
        quantity: 1
      }).then((result) => {
        this.$emit('put-to-cart', product.id)
        this.isLoading = false
      }).catch((err) => {
        this.isLoading = false
        console.log(err)
      })
    },
    getProduct (product) {
      this.isLoading = true
      axios.get(`${this.apiInfo.forProduct}/${product.id}`).then((result) => {
        product.description = result.data.data.description
        this.isLoading = false
      }).catch((err) => {
        this.isLoading = false
        console.log(err)
      })
    }
  }
})
