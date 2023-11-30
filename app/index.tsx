import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const headerList = [0, " ", 1, "Home", 2, "Section 2", 3, "Section 3", 4, "Additional Content"];
  const [headerTitle, setHeaderTitle] = useState(headerList[1]);

  const handleScroll = (event: any) => {
    const offsetY = (event.nativeEvent.contentOffset.y)-13;
    const sectionHeight = 200;
    const currentSection = Math.floor(offsetY / sectionHeight) + 1;
    setHeaderTitle(headerList[currentSection * 2 + 1]);
    //console.log('ScrollView Position:', offsetY);
    //console.log('Current Section:', currentSection);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>{headerTitle}</Text>
      </View>
      <ScrollView style={styles.scrollView} onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={[styles.section, { height: 200 }]}><Text>Section 1 Content</Text></View>
        <View style={[styles.section, { height: 200}]}><Text>Section 2 Content</Text></View>
        <View style={[styles.section, { height: 200}]}><Text>Section 3 Content</Text></View>
        <View style={[styles.section, { height: 1000}]}><Text>Additional Content</Text></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    backgroundColor: 'red',
    // Add more styles for your header
  },
  scrollView: {
    flex: 1,
    height: 800, // Adjust the height to make it work correctly
  },
  section: {
    height: 100, // Adjust height to make it scrollable
    alignItems: 'center',
    // Add more styles for your sections
  }
});

export default App;
