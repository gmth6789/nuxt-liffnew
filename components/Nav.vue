<template>
<van-nav-bar
    fixed
    left-arrow
    @click-left="onClickLeft"
    :title="title"
    :right-text="rightText"
    @click-right="onClickRight"
  ></van-nav-bar>

  </template>

  <style lang="scss" scoped>
:deep() {
  .van-nav-bar {
    &__arrow {
      color: var(--cp-text1);
      font-size: 18px;
    }
    &__title {
      font-size: 15px;
    }
  }
}
</style>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps<{
  title?: string
  rightText?: string
  back?: () => void
}>()
const emit = defineEmits<{
  (e: 'click-right'): void
}>()

const onClickRight = () => {
  emit('click-right')
}
const router = useRouter()

const onClickLeft = () => {
  if (props.back) return props.back()
  if (history.state?.back) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>