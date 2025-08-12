/**
 * HomeSliderSlide represents a slide in the home slider.
 */
export interface HomeSliderSlide {

	/**
	 * The ID of the slide.
	 */
	_id: string

	/**
	 * The title of the status.
	 */
	end_date?: number

	/**
	 * The status of the application.
	 */
	image_url: string

	/**
	 * The title of the status.
	 */
	is_enabled: boolean

	/**
	 * The more info link of the status.
	 */
	more_info_url?: string

	/**
	 * The title of the status.
	 */
	start_date?: number

	/**
	 * The title of the status.
	 */
	title: string

}
