<template>
  <div class="pa-0">
    <div>
      <div>
        <p> Day Example :</p>
        <VueDatePicker
          v-model="date"
          :allowed-dates="allowedDates"
        />
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data: () => ({
    date: null,
  }),
  methods: {
    // date is a string
    allowedDates: date => {
      // date is : YYYY-MM-DD
      return parseInt(date.split('-')[2], 10) % 2 === 0;
    },
    allowedMonths: date => {
      // date is : YYYY-MM
      return parseInt(date.split('-')[1], 10) % 2 === 0;
    },
    allowedQuarters: date => {
      // date is : YYYY-QQ
      return parseInt(date.split('-')[1], 10) % 2 === 0;
    },
    allowedYears: date => {
      // date is : YYYY
      return parseInt(date, 10) % 2 === 0;
    },
  },
};
</script>