<template>
  <div class="card border-0 mb-4 position-relative position-relative">
    <div class="responsive-rectangle">
      <router-link :to="`/product/${product.id}`">
        <img :src="product.imageUrl[0]" class="card-img-top rounded-0" alt="...">
      </router-link>
    </div>
    <a href="#" class="text-dark" @click.prevent="toggleFavorite(product)">
      <i class="fas fa-heart position-absolute"
        v-if="favorited"
        style="right: 16px; top: 16px"
      >
      </i>
      <i class="far fa-heart position-absolute"
        v-else
        style="right: 16px; top: 16px"
      >
      </i>
    </a>
    <div class="card-body p-0">
      <h4 class="mb-0 mt-3 pl-1">
        <router-link :to="`/product/${product.id}`">
          {{ product.title }}
        </router-link>
      </h4>
      <p class="card-text mb-0 pl-1">
        {{ product.price | formatCurrency }}
      </p>
      <p class="text-muted mt-3"></p>
    </div>
  </div>
  <!-- <div class="card border-0 shadow-sm">
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
        <button type="button"
          class="col-5 btn btn-outline-secondary btn-sm"
          @click="routeToThisProduct(product)"
          :disabled="isLoading || product.description">
          <i v-if="isLoading" class="spinner-grow spinner-grow-sm"></i>
          詳細資訊
        </button>
        <button type="button"
          class="col-5 btn btn-outline-primary btn-sm"
          @click="putToCart(product)"
          :disabled="isLoading || inCart">
          <i v-if="isLoading" class="spinner-grow spinner-grow-sm"></i>
          加入購物車
        </button>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  props: ['product', 'inCart', 'favorited'],
  data() {
    return {
      apiInfo: {
        forCart: '/ec/shopping',
        forProduct: '/ec/product',
      },
      isLoading: false,
    };
  },
  computed: {
  },
  watch: {
    $route(to) {
      if (to.params.id === this.product.id) {
        this.updateThisProduct();
      }
    },
  },
  methods: {
    putToCart(product) {
      this.isLoading = true;
      this.axios.post(this.apiInfo.forCart, {
        product: product.id,
        quantity: 1,
      }).then(() => {
        this.$emit('put-to-cart', product.id);
        this.isLoading = false;
      }).catch((err) => {
        this.isLoading = false;
        console.log(err);
      });
    },
    routeToThisProduct(product) {
      this.$router.push(`/product/${product.id}`);
    },
    updateThisProduct() {
      this.isLoading = true;
      this.axios.get(`${this.apiInfo.forProduct}/${this.product.id}`).then((result) => {
        this.product.description = result.data.data.description;
        this.isLoading = false;
      }).catch((err) => {
        this.isLoading = false;
        console.log(err);
      });
    },
    toggleFavorite(product) {
      this.$emit('toggle-favorite', product.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.responsive-rectangle {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
}

.card {
  transition: all .3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(0,0,0,.2);
}
</style>
