import _ from 'lodash';
import React from 'react';
import Icon, { IIconProps } from '../Icon';
import { lucidClassNames } from '../../../util/style-helpers';
import { FC, omitProps } from '../../../util/component-types';

const cx = lucidClassNames.bind('&-DotsIcon');

interface IDotsIconProps extends IIconProps {}

const DotsIcon: FC<IDotsIconProps> = ({
	className,
	color,
	...passThroughs
}): React.ReactElement => {

	return (
		<Icon
			{...omitProps(passThroughs, undefined, _.keys(DotsIcon.propTypes), false)}
			{..._.pick(passThroughs, _.keys(Icon.propTypes))}
			color={color}
			className={cx('&', className)}
		>
			<circle className={cx(`&-color-${color}`)} cx='8' cy='8' r='1' />
			<circle className={cx(`&-color-${color}`)} cx='14.5' cy='8' r='1' />
			<circle className={cx(`&-color-${color}`)} cx='1.5' cy='8' r='1' />
		</Icon>
	);
};

DotsIcon.displayName = 'DotsIcon',
DotsIcon.peek = {
	description: `
		Three dots in a row.
	`,
	categories: ['visual design', 'icons'],
	extend: 'Icon',
	madeFrom: ['Icon'],
};
DotsIcon.propTypes = {
	...Icon.propTypes,
};

export default DotsIcon;
