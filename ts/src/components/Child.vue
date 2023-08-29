<script setup lang="ts">
interface IProp {
  name: string,
  age: number
}

const props = defineProps<{
  title: string,
  obj: IProp
}>()
const emit = defineEmits<{
  (e: 'event', value: string): void
}>()
const handleClick = (value: string) => {
  emit("event", value)
}
</script>

<template>
  <div>
    {{ props.title }}
    {{ obj.name }}--{{ obj.age }}
    <button @click="handleClick('hello')"> child button</button>
  </div>

</template>

<style scoped>

</style>