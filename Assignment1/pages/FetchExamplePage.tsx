import React, {useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

// source for help: https://www.bezkoder.com/javascript-fetch/

export const FetchExamplePage = () => {
  const [status, setStatus] = useState('');
  const [data, setData] = useState<[data]>([
    {
      profile: {
        name: 'initial',
        age: 0,
        sex: 'initial',
        address: 'initial',
        bankaccountnr: 0,
      },
      id: 0,
    },
  ]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/testdata/');
    const payloadData = await response.json();
    setData(payloadData);
  };

  type data = {
    profile: {
      name: string;
      age: number;
      sex: string;
      address: string;
      bankaccountnr: number;
    };
    id: number;
  };

  const postTest = async () => {
    const postData = {
      profile: {
        name: 'Harald',
        age: 32,
        sex: 'male',
        address: 'Hakkebakkeskogen 15',
        bankaccountnr: 23475423578,
      },
    };

    try {
      const response = await fetch('http://localhost:3000/testdata/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
      }

      const payloadData = await response.json();
      console.log(payloadData);
      setStatus('Successfully added a profile');
      fetchData();
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  const replaceData = async (id: number) => {
    const postData = {
      profile: {
        name: 'Terkel',
        age: 14,
        sex: 'male',
        address: 'Knipe gata 11',
        bankaccountnr: 49583795043,
      },
    };

    try {
      const response = await fetch('http://localhost:3000/testdata/' + id, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
      }

      const payloadData = await response.json();
      console.log(payloadData);
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  const deleteData = async (id: number) => {
    try {
      const response = await fetch('http://localhost:3000/testdata/' + id, {
        method: 'delete',
      });

      if (!response.ok) {
        const message = 'Error with Status Code: ' + response.status;
        throw new Error(message);
      }

      const payloadData = await response.json();
      console.log(payloadData);
    } catch (error) {
      console.log('Error: ' + error);
    }
  };

  const replaceFirstElement = async () => {
    if (data.length > 0) {
      replaceData(data[0].id);
      setStatus('Successfully replaced the first profile');
      fetchData();
    } else {
      setStatus('cannot replace first item of an empty list!');
    }
  };

  const deleteAllData = async () => {
    for (let i = 0; i < data.length; i++) {
      deleteData(data[i].id);
    }
    setStatus('Successfully deleted all profiles');
    fetchData();
  };

  return (
    <SafeAreaView>
      <Text>Profiles: {JSON.stringify(data)}</Text>
      <Button title="Add Profile" color="#841584" onPress={postTest} />
      <Button
        title="Replace first profile"
        color="#841584"
        onPress={replaceFirstElement}
      />
      <Button
        title="Delete all profiles"
        color="#841584"
        onPress={deleteAllData}
      />
      <Text>Status: {status}</Text>
    </SafeAreaView>
  );
};
