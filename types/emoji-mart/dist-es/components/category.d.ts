import React = require('react');

import { Emoji, EmojiProps, I18n } from '.';

export interface Props {
    emojis?: Array<EmojiProps["emoji"]>;
    hasStickyPosition?: boolean;
    name: string;
    native: boolean;
    perLine: number;
    emojiProps: EmojiProps;
    recent?: string[];
    i18n: I18n;
}

export default class Category extends React.Component<Props> {
    // all methods and properties inside this are most likely intended to be private
}
