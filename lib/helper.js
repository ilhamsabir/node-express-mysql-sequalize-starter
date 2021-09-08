import { Sequelize } from 'sequelize';

export const globalGetParams = (query, key) => {
	const { limit, offset } = getPagination(query);
	const params = {
		offset: offset,
		limit: limit,
	}

	if (query.keyword) {
		params.where = {
			[key]: {
				[Sequelize.Op.like]: `%${query.keyword}%`
			},
		};
	}
	return params
}

export const resCallback = (data, status, message, meta = null) => {
	const cb = {
		data,
		status,
		message
	}
	if (meta) {
		cb.meta = meta
	}
	return cb
}

export const getPagination = (query) => {
	const page = query && query.page ? parseInt(query.page) : 1
	const size = query && query.limit ? parseInt(query.limit) : 50
	const limit = parseInt(size)
	const offset = 0 + (parseInt(page) - 1) * limit
	return { limit, offset };
};

export const resCallbackPagination = (data, page, limit) => {
	const { count, rows } = data;
	const totalPages = Math.ceil(count / limit);
	const paginationInfo = {
		total_data: rows.length, // totol data in this page
		total_all_data: count, // total all data in this table
		total_pages: totalPages, // total pages
		per_page: limit, // limit per page
		current_page: page // current active page
	};

	return resCallback(data.rows, 200, 'success', paginationInfo)
};
