/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../component/header';
import Footer from '../../component/footer';
import SubscriptionBenefits from '../../component/UI/Fragments/SubscriptionBenefits';
import SubscriptionList from '../../component/UI/Fragments/SubscriptionList';
const index = () => {
  return (
    <>
        <Header />
        <SubscriptionBenefits height = "467px"/>
        <SubscriptionList/>
        <Footer/>
    </>
  )
}

export default index
