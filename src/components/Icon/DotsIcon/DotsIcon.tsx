import _ from 'lodash';
import React from 'react';
import Icon, { IIconProps, propTypes as iconPropTypes } from '../Icon';
import { lucidClassNames } from '../../../util/style-helpers';
import { omitProps } from '../../../util/component-types';
import { Color } from '../Icon';
import PropTypes from 'react-peek/prop-types';

const cx = lucidClassNames.bind('&-DotsIcon');

const { oneOf } = PropTypes;

enum Orientation {
	vertical = 'vertical',
	horizontal = 'horizontal'
}
interface IDotsIconProps extends IIconProps {
	direction?: keyof typeof Orientation;
}

export const DotsIcon = ({
	className,
	direction = Orientation.horizontal,
	color = Color.primary,
	...passThroughs
}: IDotsIconProps) => {
	const isVerticalOrientation = _.isEqual(direction, Orientation.vertical);
	const leftOrTopPosition = {
		cx: isVerticalOrientation ? '8' : '14.5',
		cy: isVerticalOrientation ? '14.5' : '8',
	};
	const rightOrBottomPosition = {
		cx: isVerticalOrientation ? '8' : '1.5',
		cy: isVerticalOrientation ? '1.5' : '8',
	};
	
	return (
		<Icon
			{...omitProps(passThroughs, undefined, _.keys(DotsIcon.propTypes), false)}
			{..._.pick(passThroughs, _.keys(iconPropTypes))}
			color={color}
			className={cx('&', className)}
		>
			<circle className={cx(`&-color-${color}`)} cx='8' cy='8' r='1' />
			<circle className={cx(`&-color-${color}`)} {...leftOrTopPosition} r='1' />
			<circle className={cx(`&-color-${color}`)} {...rightOrBottomPosition} r='1' />
		</Icon>
	);
};

DotsIcon.displayName = 'DotsIcon';
DotsIcon.peek = {
	description: `
		Three dots in a row.
	`,
	categories: ['visual design', 'icons'],
	extend: 'Icon',
	madeFrom: ['Icon'],
};

DotsIcon.propTypes = {
	...iconPropTypes,
	direction: oneOf(_.values(Orientation))`
		Sets the orientation of how the dots are displayed. 
	`,
};

export default DotsIcon;
