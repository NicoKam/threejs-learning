import { get } from '@/utils/fetch';

/**
 * 测试接口，该接口是写在mock目录中的
 * @param {string} type 测试参数，当传入'error'时，接口将返回错误信息
 */
export const getData = ({ type }) => get('/fetch', { type });
