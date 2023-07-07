import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Section } from './Section';

export const LearnReact = ({ backgroundStyle, isDarkMode }) => (
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={backgroundStyle}>
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Section title="Step One">
        Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen
        and then come back to see your edits.
      </Section>
      <Section title="See Your Changes">
        <ReloadInstructions />
      </Section>
      <Section title="Debug">
        <DebugInstructions />
      </Section>
      <Section title="Learn More">
        Read the docs to discover what to do next:
      </Section>
      <LearnMoreLinks />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
