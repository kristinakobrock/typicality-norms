<template>
  <Experiment title="typicality_norms"
              :image-assets="pictures">
    <InstructionScreen :title="'Welcome'">
      Thank you for participating in our study. <br>
      In this study, you will rate pictures of objects for how well they fit a label.
    </InstructionScreen>

    <template v-for="(trial, i) in trialData">

      <SliderScreen
        :initial="50"
        :min="1"
        option-left="Very atypical"
        option-right="Very typical"
      >
        <template #stimulus>
          <img :src="trial.image" />
          <p>How typical is this for <strong>{{trial.question}}</strong>?</p>
        </template>
      </SliderScreen>
    
    </template>

    <SubmitResultsScreen />
  </Experiment>
</template>

<script>
import _ from 'lodash';
import trialData from '../trials/trials.csv';

export default {
  name: 'App',
  data() {
    return {trialData: _.shuffle(trialData),
            pictures: trialData.map(trial => trial.image)
            };
  },
  computed: {
    // Expose lodash to template code
    _() {
      return _;
    }
  }
};

</script>
