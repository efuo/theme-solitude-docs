<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div>
    <ULandingHero v-if="page.hero" v-bind="page.hero">
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>

      <template #title>
        <MDC :value="page.hero.title" />
      </template>

      <MDC :value="page.hero.code" tag="pre" class="prose prose-primary dark:prose-invert mx-auto" />
    </ULandingHero>

    <ULandingSection :title="page.features.title" :links="page.features.links">
      <UPageGrid>
        <ULandingCard v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection :title="page.testimonials.title">
      <UPageColumns>
        <UPageCard v-for="(testimonial, index) in page.testimonials.items" :key="index">
          <q class="italic text-gray-500 dark:text-gray-400">
            {{ testimonial.quote }}
          </q>

          <div class="flex gap-x-3 items-center mt-3">
            <UAvatar :src="testimonial.author.avatar" :alt="testimonial.author.name" size="sm" />

            <div class="min-w-0 text-sm">
              <p class="font-semibold">
                {{ testimonial.author.name }}
              </p>
              <p class="truncate">
                {{ testimonial.author.job }}
              </p>
            </div>
          </div>
        </UPageCard>
      </UPageColumns>
    </ULandingSection>

  </div>
</template>