[![NPM Version](https://img.shields.io/npm/v/react-google-tag-manager.svg?style=flat)](https://www.npmjs.org/package/react-google-tag-manager)
[![Build Status](https://img.shields.io/travis/holidaycheck/react-google-tag-manager/master.svg?style=flat)](https://travis-ci.org/holidaycheck/react-google-tag-manager)
[![Dependencies](http://img.shields.io/david/holidaycheck/react-google-tag-manager.svg?style=flat)](https://david-dm.org/holidaycheck/react-google-tag-manager)

# react-google-tag-manager

This repository contains a react based implementation for
Google's Tag Manager [snippet](https://developers.google.com/tag-manager/quickstart).

## Motivation & Expectation - FORK

We like to use **G**oogle's **T**ag **M**anager in our React Stack. We wrap it into a component because
it makes it testable. And based on our agreement every component needs to be tested.

Other requirements for the GTM implementation are:

1. provide a GTM-ID
1. provide additional events on script initialization (optional)
1. provide a name for the datalayer (optional)
1. works for server-side-rendering and client-side-rendering
1. contains tests
1. installable via npm

Forked to allow compatibility with react 0.13

## How to use

To use it in your project run `npm i react-google-tag-manager`. It could be used like the following example:

```javascript
import gtmParts from 'react-google-tag-manager'

export default class GoogleTagManager extends React.Component {
    render() {
        const gtm = gtmParts({
          id: 'GTM-12345',
          dataLayerName: 'customDatalayer',
          additionalEvents: {
              myCustomEvent: 'FooBar',
              anotherEvent: true
          }
        });

        return (
            <div id="gtm">
                {gtm.noScriptAsReact()}
                {gtm.scriptAsReact()}
            </div>
        );
    }
}

```

`gtmParts` takes the following arguments:

| argument keys  | required 		|default value|
| -------------- | ------------- |-------------|
| `id`  				| yes  		|	           |
| `dataLayerName`  | no  			| `dataLayer` |
| `additionalEvents`  | no  			| `{}` |


Additionaly are the functions `gtm.noScriptAsHTML()` and `gtm.scriptAsHTML()` implemented which return a simple HTML string.
