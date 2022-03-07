'use strict';

/**
 * cuba service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cuba.cuba');
