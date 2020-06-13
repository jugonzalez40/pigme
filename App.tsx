import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text, Card} from '@ui-kitten/components';

export const CardSimpleUsageShowcase = () => (
  <Card>
    <Text>
      The Maldives, officially the Republic of Maldives, is a small country in
      South Asia, located in the Arabian Sea of the Indian Ocean. It lies
      southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the
      Asian continent
    </Text>
  </Card>
);

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">HOME</Text>
    <CardSimpleUsageShowcase />
  </Layout>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);
